
import { Link } from "react-router-dom";
import { Notice } from "../components/noticeForBlackPage/notice";
import { NoticePage } from "../style";
import { useEffect, useState } from "react";
import axios from "axios";



export default function MainNoticePage() {

   const [noticias, setNoticias] = useState<{}[]>()
    useEffect(() => { 
        async function getData(){
            const Service = axios.create({
            baseURL: "http://localhost:5000",
            });
         let {data} = await Service.get("/showdata")
        setNoticias(data);
        }
        getData();
        }, [])
    return (
        <NoticePage>
            <Link to='/'>
                <div className="genericGrid backButton">
                    <img src="./back.png" alt="" />
                    <span>VOLTAR A HOME</span>
                </div>
            </Link>
            <div className="genericGrid filter">
                <img src="./filter.png" alt="" />
                <span>QUAIS SUAS PREFERENCIAS DE PESQUISA?</span>
            </div>
            {
            noticias?.map((element: any, key) => {
                    return (
                        <Notice key={key} url={element.url} notice={element.notice} header={element.header} data={element.data} uuid={element.uuid} upvotes={element.upvotes}></Notice>)
                })
            }
        </NoticePage>
    )
}