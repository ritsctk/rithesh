import React from 'react'

export default function Button({
    onClick,
    children,
    loading = false,
    disabled = false,
    additionalClass = '',
    className = 'bg-[#009e66] text-white text-lg rounded-full',
}) {
    return (
        <button
            onClick={onClick}
            disabled={disabled || loading}
            className={`p-2 px-4 text-white ${
                disabled && 'opacity-50'
            } ${className} ${additionalClass}`}
        >
            {loading ? 'Loading...' : children}
        </button>
    )
}
