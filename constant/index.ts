export const VisionInfo = `Our vision at Zenith Construction is to be the catalyst for transformation in Somalia's construction industry. We envision a future where innovation flourishes, sustainability is paramount, and excellence is the standard. By pushing the boundaries of conventional construction practices and embracing cutting-edge technologies, we aim to elevate the industry and set new benchmarks for quality and craftsmanship.`
export const MissionInfo = `Our mission is to lead the construction industry in Somalia by providing unmatched quality, safety, and value to our clients. We strive to foster a culture of collaboration, innovation, and continuous improvement within our organization, empowering our team to deliver superior results on every project.`
export const AboutInfo = `Zenith Construction is a new and innovative construction company in Somalia, committed to transforming both urban and rural environments through high-quality, sustainable building practices. Despite being new to the industry, we bring a fresh perspective and a strong commitment to integrity, community engagement, and environmental stewardship.`
export const HeroInfo = `With a focus on innovation and sustainability, we strive to create lasting structures that not only stand the test of time but also empower future generations to thrive.`
export const PhilosInfo = `At the core of Zenith Construction lies a philosophy rooted in integrity, quality, and sustainability. We believe that every project is an opportunity to make a positive impact, not only on the built environment but also on the lives of the people we serve. Our approach is characterized by a harmonious blend of creativity, technical expertise, and unwavering dedication, resulting in spaces that not only meet but exceed expectations.`
export const ServiceInfo = `Zenith Construction is a new and innovative construction company in Somalia, investing in the community and engaging local talent, and introducing innovative building solutions for sustainable prosperity.`

export interface ServicesItem {
    id : number,
    title : string,
    desc : string,
    src : string,
}
export interface CoreItem {
    id : number,
    title : string,
    desc : string
}
export interface GencoService {
    id : number,
    title : string,
    desc : string
}
    
export const GencoServiceList: GencoService[] = [
   {
            id: 1,
            title: 'Project Management',
            desc: 'Overseeing the project from start to finish, ensuring it stays on schedule and within budget.'
        }, {
            id: 2,
            title: 'Subcontractor Coordination',
            desc: ' Managing and supervising subcontractors to ensure quality workmanship and timely completion of tasks.'
        }, {
            id: 3,
            title: 'Quality Control',
            desc: 'Implementing strict quality control measures to ensure the highest standards of construction.'  
        }, {
            id: 4,
            title: 'Permitting and Inspections',
            desc: 'Handling all necessary permits and coordinating inspections to ensure compliance with local building codes and regulations.'  
        }
]

export const DebuServiceList: GencoService[] = [
   {
            id: 1,
            title: 'Integrated Design and Construction:',
            desc: 'A unified team handles both design and construction, ensuring clear communication and streamlined project delivery.'
        }, {
            id: 2,
            title: 'Concept Development',
            desc: 'Working closely with clients to develop initial concepts and ideas, transforming them into feasible plans.'
        }, {
            id: 3,
            title: 'Architectural and Engineering Services',
            desc: 'Providing in-house architectural and engineering expertise to create detailed designs and plans.'  
        }, {
            id: 4,
            title: 'Value Engineering',
            desc: ' Identifying cost-saving opportunities without compromising quality or functionality.'  
        }, {
            id: 5,
            title: 'Single Point of Accountability',
            desc: 'Simplifying the process with one contract and one team responsible for the entire project.'  
        }
]

export const IndeServiceList: GencoService[] = [
   {
            id: 1,
            title: 'Road and Highway Construction',
            desc: 'Building and improving roadways to facilitate efficient transportation.'
        }, {
            id: 2,
            title: 'Utility Infrastructure',
            desc: 'Developing water, sewer, and electrical systems to support residential, commercial, and industrial needs.'
        }, {
            id: 3,
            title: 'Bridges and Tunnels',
            desc: 'Constructing safe and durable structures to connect communities.'  
        }, {
            id: 4,
            title: 'Public Works Projects',
            desc: 'Collaborating with government agencies to enhance public infrastructure, including parks, public buildings, and transit systems.'  
        },
]
export const RereServiceList: GencoService[] = [
   {
            id: 1,
            title: 'Residential Renovation',
            desc: 'Updating homes to meet modern standards, including kitchens, bathrooms, and living spaces.'
        }, {
            id: 2,
            title: 'Commercial Renovations',
            desc: ' Revitalizing office spaces, retail stores, and other commercial properties to improve functionality and aesthetics.'
        }, {
            id: 3,
            title: 'Historic Restorationss',
            desc: 'Preserving and restoring historic buildings with a focus on maintaining their original character while enhancing safety and usability.'  
        }, {
            id: 4,
            title: 'Adaptive Reuse',
            desc: ' Transforming obsolete or underutilized spaces into functional, contemporary environments.'  
        },
]
export const CoreValues : CoreItem[] = [
    {
        id: 1,
        title: 'Quality Craftsmanship',
        desc: 'We focus on delivering top-notch workmanship, aiming for excellence in every detail to create projects that surpass expectations and endure over time.'
    },
    
    {
        id: 2,
        title: 'Empowering Workforce',
        desc: 'We support and uplift our workforce, encouraging pride and exceptional performance in their work.'
    },
    {
        id: 3,
        title: 'Integrity and Transparency',
        desc: `Our operations are built on honesty, accountability, and openness. We earn trust by maintaining high ethical standards in all we do.`
    },
    {
        id: 4,
        title: 'Collaborative Spirit',
        desc: `We thrive on collaboration, building strong partnerships with clients, stakeholders, and communities to achieve common goals and mutual success.`
    },
    {
        id: 5,
        title: 'Innovative Solutions',
        desc: `Innovation is at our core. We use advanced construction techniques and sustainable practices to deliver creative solutions that lead the future of construction in Somalia.`
    },
    {
        id: 6,
        title: 'Sustainable Development',
        desc: 'We are dedicated to protecting the environment by using eco-friendly materials, energy-efficient designs, and responsible construction methods for a sustainable future.'
    },
]

export const ServicesList : ServicesItem[] = [
    {
        id: 1,
        title: "General Contracting",
        desc: "We manage and execute construction projects of all sizes, ensuring timely completion and budget adherence.",
        src: "/images/examples/11.jpg",
        
    },
    
    {
        id: 2,
        title: "Design-Build",
        desc: "Our integrated approach streamlines construction from concept to execution, delivering efficient solutions ",
        src: "/images/examples/13.png",
        
    },
    {
        id: 3,
        title: "Infrastructure Development",
        desc: "We spearhead projects to enhance Somalia's infrastructure, fostering progress and connectivity nationwide.",
        src: "/images/examples/12.jpg",

    },
    {
        id: 4,
        title: "Renovation and Restoration",
        desc: "We specialize in revitalizing existing structures while preserving their architectural character. ",
        src: "/images/examples/14.jpg",

    },

]