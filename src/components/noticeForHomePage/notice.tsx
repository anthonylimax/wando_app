
import { useNavigate } from "react-router-dom"
import { Notice as Note } from "../../style"
import { useState } from "react";


export function Notice(notice: { url: string, uuid: string, upvotes: number, notice: string, header: string, data: number }) {
    const span = {
        color: "#7E7E7E",
        fontSize: "clamp(12px, 1vw, 20px)",
        spanNotice: {
            fontSize: 20,
            color: "black",
        }
    }
    const [currentData] = useState(Date.now() - notice.data);
    const scroller = (): void => {
        const windowsDown = window.scrollY + 9 / 10 * window.innerHeight;
        const elements = document.querySelectorAll("[data-origin]")
        const elementsTwo = document.querySelectorAll("[image-top]")
        elementsTwo.forEach((element: any) => {
            if (windowsDown > element.offsetTop) {
                element.classList.add("actived")
            }
        })
        elements.forEach((element: any) => {
            if (windowsDown > element.offsetTop) {
                element.classList.add("actived")
            }
        })
    };
    setInterval(scroller, 1000 / 60)
    let newnotice = {
        notice: '',
        header: '',
    }
    if (notice.notice.length >= 175) {
        for (let i = 0; i <= 174; i++) {
            newnotice.notice += notice.notice[i];

        }
        if (notice.header.length >= 46) {
            for (let i = 0; i <= 46; i++) {
                newnotice.header += notice.header[i];
            }
        }
        else {
            newnotice.header = notice.header;
        }
    }
    else {
        newnotice.header = notice.header;
        newnotice.notice = notice.notice;
    }
    const convertedData = new Date(currentData);
    const navigate = useNavigate();
    return (
        <Note>
            <img onClick={() => {
                navigate("/noticia", { state: notice })
            }} data-origin="image-top" src={notice.url}></img>
            <div data-origin="image-top" style={
                {
                    display: 'flex',
                    gap: 10,
                    width: '100%',
                    maxWidth: '580px',
                    flexDirection: 'column',
                }
            }>
                <span style={{
                    textTransform: 'uppercase',
                    fontSize: 'clamp(20px, 50vw, 30px)',
                    color: '#FB5D5D',
                    fontWeight: 500,
                }}>{newnotice.header}</span>
                <span style={span.spanNotice}>{newnotice.notice}...</span>
                <span style={span}>{convertedData.toDateString()}</span>
            </div>
        </Note>
    )
}

