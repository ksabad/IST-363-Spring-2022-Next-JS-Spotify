import Col from '../../components/Col'
import Heading from '../../components/Heading'
import Image from 'next/image'
import Layout from '../../components/Layout'
import Row from '../../components/Row'
//import Section from '../../components/Section'

import {getAllAlbumSlugs, getSingleAlbumData} from '../../lib/api'

//WATERFALL

// 1. GETSTATICPATHS
export async function getStaticPaths(){
    const paths = await getAllAlbumSlugs();
    return {
        paths,
        fallback: false
    }
}
// 2. GETSTATICPROPS
export async function getStaticProps({params}){
    console.log({params})
    const albumData = await getSingleAlbumData(params.id);
    return {
        props:{
            albumData
        }
    }
}

// 3. USEDATA

const singleAlbumPage = ({albumData}) => {
    const {title, featuredImage, albumInformation} = albumData;
    const {sourceUrl, altText, mediaDetails} = featuredImage.node;
    const {year, songsToAlbums} = albumInformation;
    return <Layout>
        <Image
			src={sourceUrl}
			alt={altText}
			width={mediaDetails.width}
			height={mediaDetails.height}
					/>
        <Heading level = "1">{title}</Heading>
        <Heading level = "2">{year}</Heading>
        
        { /*artistsToAlbums && artistsToAlbums.map((artist, index) => {
            const {title,slug} = artist;
            return <Heading level = "2">
                <Link href={`/artists/${slug}`}>
                    <a>
                        {title}
                    </a>
                </Link>
            </Heading>
        }) */}

        {songsToAlbums && 
            <section>
                <Heading level ="2">Songs</Heading>
                <Row>
                {songsToAlbums.map((song, index) => {
                    const {title}= song;
                    return <Col key= {index} xs="12" sm="12">
                    <Heading level="3">{title}</Heading>
                    </Col>
                })}
                </Row>
            </section>
        }
    </Layout>
}
export default singleAlbumPage;