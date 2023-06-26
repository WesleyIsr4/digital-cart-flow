import { GetServerSideProps } from 'next'

import { getOffers } from 'api/getPlan'

import PlanTemplate from 'components/templates/Plan'

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data } = await getOffers()

    return {
      props: {
        data: data,
      },
    }
  } catch (error) {
    return {
      redirect: {
        destination: '',
        permanent: false,
      },
    }
  }
}

export default PlanTemplate
