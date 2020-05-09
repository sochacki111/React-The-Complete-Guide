import React from 'react';

/**
 * withClass is not limited to one component only
 */
const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            {/**
             * This won't work because React automaticaly takes all the attribures 
             * and combines them in a props 
             * <WrappedComponent props={props} /> 
             * */}
            <WrappedComponent {...props} />
        </div>
    );
}

export default withClass;