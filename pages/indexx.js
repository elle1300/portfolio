import Card from '../../../hero/card/card';
import Hero from '../../../hero/Hero';
import Layout from '/components/layout/Layout'


function about() {
  return (
    <Layout>
      <Hero 
        heading="Hi I'm Sumi, I'm cool." 
        subHeading="Here's some work in my favorite areas of study. These include Coding, Robotics, Photography, Video Editing, and saving the environment."
        buttonText="Learn more"
        bgImage="/bgGif.gif"
      />
      <Sectionbreak />
      <h2>Projects</h2>
      <Layout>
    <div className="flex justify-space-evenly flex-wrap">
      <Card 
        image="/project.jpeg" 
        alt="Project image" 
        title="Cool Project" 
        text="An ai driven application that helps people study and memorize faster! Artificial intelligence automatically figures out what study point you need more help memorizing and times study cues to help information stick."
        buttonText="Learn More"
        buttonLink=""
      />
      <Card 
        image="/project.jpeg" 
        alt="Project image" 
        title="Cool Project" 
        text="An ai driven application that helps people study and memorize faster! Artificial intelligence automatically figures out what study point you need more help memorizing and times study cues to help information stick."
        buttonText="Learn More"
        buttonLink=""
      />
      <Card 
        image="/project.jpeg" 
        alt="Project image" 
        title="Cool Project" 
        text="An ai driven application that helps people study and memorize faster! Artificial intelligence automatically figures out what study point you need more help memorizing and times study cues to help information stick."
        buttonText="Learn More"
        buttonLink=""
      />
    </div>
    <SectionBreak/>
    <h2>Contact</h2>
    <ContactForm />
    </Layout>  
  )
}

export default Home
