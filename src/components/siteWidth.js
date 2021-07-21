import React from 'react'
import styled from 'styled-components'

const Sitewrap = styled.div`
    width: calc(var(--unit) * 60);
    width:90vw;
    margin:0 auto;
`
const SiteWidth = ({ children }) => (
    <Sitewrap>
        {children}
    </Sitewrap>
)
 
export default SiteWidth