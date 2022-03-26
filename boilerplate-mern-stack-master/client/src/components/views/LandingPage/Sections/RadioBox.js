import { Checkbox, Collapse, Radio } from "antd";
import React, { useState } from "react";

const RadioBox = (props) => {

    const [Value, setValue] = useState(0);

    const renderRadioBox = () => (
        props.list && props.list.map((value,idx)=> (
            <Radio key={value._id} value={value._id}>
                {value.name}
            </Radio>
        )));
    
   const handleChange = (event) => {
       setValue(event.target.value);
       props.handleFilter(event.target.value);
   } 

  return (
    <div>
      <Collapse defaultActiveKey={["0"]}>
        <Collapse.Panel header="Price" key="1">
            <Radio.Group onChange={handleChange} value={Value}>
            {renderRadioBox()}
            </Radio.Group>
        </Collapse.Panel>
      </Collapse>
    </div>
  )
}

export default RadioBox