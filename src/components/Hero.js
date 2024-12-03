import HEROIMG from'../components/assets/hero1_processed.webp';
import { AiOutlineGithub  ,AiOutlineInstagram, AiFillLinkedin, }from 'react-icons/ai';

export default function Hero() {
  const config ={
    subtitle: 'Im a Full-stack devoloper',
    social:{
    github:"https://github.com/Annapoorni35/Annapoorni.git/",
    linkedin:"https://www.linkedin.com/in/anna-poorni-33470933b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram:"https://www.instagram.com/silent_killer_23a?utm_source=qr&igsh=MTkxdzJjYWVscXFkZA==",
    } 
   
  }

    return <section className='flex flex-col  md:flex-row px-5 py-32  bg-secondary justify-center ' id='hero'>
        <div className=' md:  w-1/2 flex flex-col'>
            <h1 className=' text-white text-4xl font hero-font '>Hi,<br/> iam R Annapoorni
        <p className='text-2xl'>{config.subtitle}</p>
       </h1> 
       <div className='flex py-10'>
           <a href={config.social.github} className='pr-5 hover:text-white'><AiOutlineGithub size={60}/></a>
           <a href={config.social.AiFillLinkedin} className='pr-5 hover:text-white'>< AiFillLinkedin size={60}/></a>
           <a href={config.social.instagram} className='hover:text-white'>< AiOutlineInstagram size={60}/></a>
       </div>
        </div>
       
        < img className=' md:w-1/3' src={HEROIMG} alt='the girl of img' />
    </section>
} 