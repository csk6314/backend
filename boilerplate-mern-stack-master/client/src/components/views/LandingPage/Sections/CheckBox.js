import { Checkbox, Collapse } from "antd";
import React, { useState } from "react";

const CheckBox = (props) => {
  const [Checked, setChecked] = useState([]);

  const handleToggle = (value) => {
    const currentIdx = Checked.indexOf(value);

    const newChecked = [...Checked];

    if (currentIdx === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIdx, 1);
    }
    setChecked(newChecked);
    props.handleFilter(newChecked);
  };

  const renderCheckboxLists = () =>
    props.list &&
    props.list.map((value, idx) => (
      <Checkbox
        key={value._id}
        checked={Checked.indexOf(value._id) === -1 ? false : true}
        onChange={()=>handleToggle(value._id)}
      >
        {value.name}
      </Checkbox>
    ));

  return (
    <div>
      <Collapse defaultActiveKey={["0"]}>
        <Collapse.Panel header="Continents" key="1">
          {renderCheckboxLists()}
        </Collapse.Panel>
      </Collapse>
    </div>
  );
};

export default CheckBox;
