import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { styled } from 'linaria/react'

import ContextProvider from '~/provider/ContextProvider'
import Navigation from '~/components/Navigation'
import Footer from '~/components/Footer'

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
  padding: 0;
`

const Container = styled.section`
  flex: 1;
`
const Layout = ({ children }) => {
  return (
    <ContextProvider>
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <Wrapper>
            <Navigation siteTitle={data.site.siteMetadata.title} />
            <Container>
              {children}
            </Container>
            <Footer/>
          </Wrapper>
        )}
      />
    </ContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout