import React from 'react';
import './Card.css';

interface CardProps {
    children: React.ReactNode;
    header?: string;
}

const Card: React.FC<CardProps> = ({ header, children }) => {
    return <div className="card">
        {header && <div className="card-header">{header}</div>}
        <div className="card-body">
        {children}
        </div>
        </div>;
};

export default Card;