import * as React from "react"
import { MinistryTile } from '../../components';
import { MinistryLayout } from '../../layouts';


const spark = 'https://picsum.photos/seed/picsum1/200/300';
const fire = 'https://picsum.photos/seed/something/200/300';
const beacon = 'https://picsum.photos/seed/picsum2/200/300';

const Content = () => {
    return <>
        
		<p>This ministry serves anyone who is looking to get some prophetic words to help them understand how God sees them.</p>

		<p>We engage in prophetic words online and during service.</p>

		<p>To receive care from this ministry please sign up online.</p>

		<p>We love watching people get excited about how Jesus feels about them.</p>
    </>
}
// markup
const MinistriesPage = () => {
    return <MinistryLayout
        name = "Spark"
        description = "A youth ministry for kids ages 1-9"
        content = { <Content /> }
        mainImage = { spark }
        galleryImages = { [ spark, fire, beacon, fire ]}
    />
}

export default MinistriesPage
