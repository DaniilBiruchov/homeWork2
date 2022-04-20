import React from 'react';
import Input from './Input/Input';
import Select from './Select/Select';


const PostFilter = ({filter, setFilter}) => {

    return (
        <div>
            <Input
            placeholder="Search..."
            value={filter.search}
            onChange={(e) => setFilter({...filter, search: e.target.value})}
             />
            <div>
                <Select
                value={filter.sort}
                onChange={sortedPost => setFilter({...filter, sort: sortedPost})}
                defaultValue="By sorting"
                option={[
                    {value: 'title', name: 'By title'},
                    {value: 'description', name: 'By description'}
                ]}/>
            </div>
      </div>
    );
};

export default PostFilter;