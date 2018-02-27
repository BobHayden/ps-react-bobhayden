import React from 'react'
import PropTypes from 'prop-types'

/** Label with required field display, htmlFor, and block styling */
class Label extends React.Component
{
    static propTypes = {
        /** HTML ID for associated input */
        htmlFor: PropTypes.string.isRequired,
        /** Label text */
        label: PropTypes.string.isRequired,
        /** Display an asterisk after label if true */
        required: PropTypes.bool
    }

    static defaultProps = {
        required: false
    }

    render()
    {
        const {htmlFor, label, required} = this.props
        return (
            <label style={{display: 'block'}} htmlFor={htmlFor}>
                {label} {required && <span style={{color: 'red'}}> *</span>}
            </label>
        )
    }
}

export default Label