import React from 'react';
import './Button.css';

export default function Button({
    children,
    variant = 'primary',
    size = 'medium',
    onClick,
    href,
    type = 'button',
    className = '',
    ...props
}) {
    const baseClass = 'btn';
    const variantClass = `btn-${variant}`;
    const sizeClass = `btn-${size}`;
    const classes = `${baseClass} ${variantClass} ${sizeClass} ${className}`.trim();

    if (href) {
        return (
            <a href={href} className={classes} {...props}>
                {children}
            </a>
        );
    }

    return (
        <button type={type} className={classes} onClick={onClick} {...props}>
            {children}
        </button>
    );
}
