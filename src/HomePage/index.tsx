
import './index.css'
import { Main, Menu, Section, Button, ButtonNotice } from '../style'
import { Notice } from '../components/noticeForHomePage/notice';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
export default function Header() {
    
    const [noticias, setNoticias] = useState<{url: string, notice: string, upvotes: number, data: number, uuid: string, header: string}[]>();
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
        
    const i = [1, 2, 3, 4];
    const j = ['', '', '', '', '', '']
    function toggleMenu() {
        const menuactive = document.getElementsByClassName('menu')[0];
        menuactive?.classList.remove('menu')
        menuactive?.classList.add('active')
    }
    function toggleMenuOff() {
        const menuactive = document.getElementsByClassName('active')[0];
        menuactive?.classList.remove('active');
        menuactive?.classList.add('menu')
    }
    
    return (
        <div className='All'>
            <Main>
            
                <Menu onClick={toggleMenu} src={'./menu.png'} />
                <div className="menu">
                    <img onClick={toggleMenuOff} src="./closeMenu.png" alt="" />
                    <div className='items'>
                        <a href="#"><span>INICIO</span></a>
                        <a href="#projetos"><span>PROJETOS</span></a>
                        <a href='#emendas'><span>EMENDAS</span></a>
                        <Link to="/noticias"><span>NOTICIAS</span></Link>
                    </div>
                </div>
                <img src="./initial.png" alt="" />
                <img className="arrow" src="./arrow.png" alt="" />
            </Main>
            <Section className="backgrounded" >
                <h2 data-origin="down-top">Como vereador de Jaboatão dos Guararapes, uma das minhas principais preocupações é garantir um saneamento básico de qualidade para todos os moradores da cidade. Reconheço a importância desse serviço essencial para a saúde pública e o bem-estar da população, e tenho trabalhado incansavelmente para implementar medidas que melhorem a infraestrutura e a gestão do saneamento.</h2>
            </Section>
            <div className="project-main" id="projetos" >
                <Section className='projects'>
                    <span data-origin="image-top">PROJETOS</span>
                    <div className="grid-images">
                        {i.map((element, key) => {
                            return <img key={key} data-origin="image-top" src={`./i${element}.png`}></img>
                        })}
                    </div>
                </Section>
            </div>
            <Section className='whoami'>
                <span data-origin="image-top">QUEM É WANDO DE ZÉ BOM?</span>
                <div className='wrapper'>
                    <img data-origin="image-top" src="./whoami.png" alt="" />
                    <span data-origin="image-top">Sou Wando de zé bom, tenho uma paixão enraizada pelo esporte e sou um fervoroso entusiasta de todas as suas formas.
                        Ao longo da minha vida, tive a oportunidade de explorar diversas áreas, desde o futebol até o setor de vendas.
                        Como adorador ávido do esporte, reconheço o seu poder transformador, tanto para o indivíduo quanto para a comunidade. Acredito que o esporte é uma ferramenta poderosa para promover valores como trabalho em equipe, disciplina, superação e respeito. Tenho me empenhado em incentivar e apoiar iniciativas esportivas em minha comunidade, reconhecendo o potencial do esporte como um catalisador para o desenvolvimento pessoal e social.</span>
                </div>
            </Section>
            <Section id='emendas    ' className='proposals'>
                <span className='title' data-origin="image-top">PROPOSTAS E MEDIDAS</span>
                <div>
                    {
                        j.map((element ,key) => {
                            return (
                                <div key={key}
                                    data-origin="down-top"
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: "20px",
                                    }}
                                ><img src='./verify.png'></img>
                                    <span style={{ fontSize: 30 }}>{element}proposta de cartão para compra de materiais escolares</span>
                                </div>

                            )
                        })
                    }

                </div>
                <span data-origin="down-top" className='envite-me'>envie-me uma recomendação, Como vereador de Jaboatão dos Guararapes, estou aqui para ajudar e responder suas perguntas. Como posso ajudá-lo hoje?</span>
                <Link to="/emailEnvite"><Button data-origin="down-top">CONTATE-ME</Button></Link>
            </Section>
            <Section className='notice'>
                <span
                    data-origin="image-top" className="title">
                    notícias e novidades
                </span>
                <span className='about-notice'>Aqui, reunimos informações políticas relevantes e análises aprofundadas para ajudar você a se manter atualizado sobre os acontecimentos políticos em nossa comunidade e além.</span>
                <span className="novity">VEJA AS ÚLTIMAS ATUALIZAÇÕES</span>
                    {
                        noticias?.map((element, key) => {
                            if(key <= 1){
                            return <Notice key={key} uuid={element.uuid} url={element.url} notice={element.notice} upvotes={element.upvotes} header={element.header} data={element.data}/>
                        }
                        })
                    }
                <Link data-origin="image-top" to='noticias'>
                    <ButtonNotice >Ver mais </ButtonNotice>
                </Link>
            </Section>
            <footer>
                    <span>contato: email@gmail.com</span>
                    <span>whatsapp: 9XXXX-XXXX</span>
                    <span>SLOGAN QUALQUER DE SUA PREFERÊNCIA!</span>
            </footer>
        </div>

    )
}