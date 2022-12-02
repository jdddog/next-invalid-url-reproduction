import NextLink from "next/link";

export default function Home() {
    return (
        <div>
            <NextLink href="/">Home</NextLink><br/>
            <NextLink href="/country/1/">Country 1</NextLink> <br/>
            <NextLink href="/country/2/">Country 2</NextLink><br/>
            <NextLink href="/country/3/">Country 3</NextLink><br/>
            <NextLink href="/country/4/">Country 4</NextLink><br/>
            <NextLink href="/country/5/">Country 5</NextLink><br/>
        </div>
    );
}

export async function getStaticProps() {
    return {
        props: {},
    };
}