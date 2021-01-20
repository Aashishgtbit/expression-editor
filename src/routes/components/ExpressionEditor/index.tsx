import React, { useState } from "react";
import { Mention, MentionsInput } from "react-mentions";
import { defaultMentionStyles } from "./defaultMentionStyles";
import { mentionsTriggerData } from "../../../utils/fakeData";
interface ExpressionEditorProps {}

function ExpressionEditor(props: ExpressionEditorProps) {
  const [value, setValue] = useState("Hello");
  // const [areaInputValue, updateAreaInputValue] = useState("");
  // const [logicErrorText, setLogicErrorText] = useState("");
  const hanldeAreaInputValue = (val: any) => {
    setValue(val);
  };

  // const highlighterSubString = document.getElementsByClassName(
  //   "customMentionInput__highlighter__substring"
  // );

  return (
    <div className="customLogicInput">
      <MentionsInput
        className="customMentionInput"
        id="logicTextArea"
        value={value}
        onChange={(
          event: { target: { value: string } },
          newValue: string,
          newPlainTextValue: string
        ) => {
          hanldeAreaInputValue(newPlainTextValue);
        }}
        style={defaultMentionStyles}
      >
        <Mention
          trigger={/(?:^|)(\$([^\s\$]*))$/} // with space = /(?:^|\s)(\$([^\s\$]*))$/
          markup={`$[____display____]`}
          data={mentionsTriggerData}
          displayTransform={(id, display) => `$'${display}'`}
          appendSpaceOnAdd={true}
        />
      </MentionsInput>
      <div className="bottom-button-bar">
        <button>set</button>
      </div>
    </div>
  );
}

export default ExpressionEditor;
