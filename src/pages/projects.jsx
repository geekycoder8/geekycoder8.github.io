import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Card from '../components/Card';
import Navbar from '../components/Navbar';

function Projects({ location }) {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                nodes {
                    id
                    frontmatter {
                    title
                    external
                    tech
                    image
                    }
                    rawMarkdownBody
                }
            }
        }
    `);
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className="h-full w-full bg-primary font-mono">
                <Navbar open={open} setOpen={setOpen} location={location}/>
                <div className={`flex ${open ? 'mt-48' : ''}`}>
                    <div className={`${open ? 'my-32' : 'mt-20'} text-info mx-10`}>
                        <h1 className="text-4xl font-bold">Projects</h1>
                        {
                            data.allMarkdownRemark.nodes.map((e, i) => {
                                return <Card 
                                    key={e.id}
                                    title={e.frontmatter.title} 
                                    body={e.rawMarkdownBody}
                                    // github={e.frontmatter.github}
                                    external={e.frontmatter.external}
                                    tech={e.frontmatter.tech}
                                    img={e.frontmatter.image}
                                    delay={i*0.3}
                                />
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export function Head() {
    return (
        <title>
            Mohamed Faisal
        </title>
    )
}

export default Projects;