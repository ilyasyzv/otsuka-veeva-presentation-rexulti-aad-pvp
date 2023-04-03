import './style.scss';
import React, { useEffect, useRef, Children, cloneElement } from "react";

type FadingBlocksProps = {
    direction?: "row" | "column";
    children?: React.ReactNode;
};

const FadingBlocks = ({ direction = "row", children }: FadingBlocksProps) => {
    const blockRefs = useRef<Array<HTMLDivElement | null>>([]);

    useEffect(() => {
        blockRefs.current.forEach((blockRef, index) => {
            if (blockRef) {
                setTimeout(() => {
                    blockRef.style.opacity = "1";
                    blockRef.style.transition = "opacity 1s";
                }, 1000 * (index + 1));
            }
        });
    }, []);

    const renderChildren = () => {
        if (!children) return null;

        return Children.map(children, (child, index) => {
            if (!React.isValidElement(child)) return null;
            return cloneElement(child, {
                ref: (element: HTMLDivElement) => (blockRefs.current[index] = element),
                style: { ...child.props.style, opacity: 0 }
            });
        });
    };

    return (
        <div
            className='row'
            style={{ flexDirection: direction === "row" ? "row" : "column" }}
        >
            {renderChildren()}
        </div>
    );
};

export default FadingBlocks;
