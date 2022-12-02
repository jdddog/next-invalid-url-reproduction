import NextLink from "next/link";

type Props = {
  id: string;
};

export default function Country({ id }: Props) {
  return (
    <>
      <NextLink href="/country/">Back to Country List</NextLink>
      <h1>Country {id}</h1>
    </>
  );
}

type Params = {
  params: {
    id: string;
  };
};

export async function getStaticProps({ params }: Params) {
  return {
    props: {
      id: params.id,
    },
  };
}

export async function getStaticPaths() {
  const paths = ["1", "2", "3", "4", "5"].map((id) => {
    return {
      params: {
        id: id,
      },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
}
