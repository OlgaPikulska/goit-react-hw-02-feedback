import styled from "styled-components";
import PropTypes from 'prop-types';

const StyledMessage = styled.p`
margin-left: 20px;
font-weight: 600;
`
export const Notification = ({ message }) => (
    <StyledMessage>{message}</StyledMessage>
)

Notification.propTypes = {
    message: PropTypes.string.isRequired
}