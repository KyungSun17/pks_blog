import React from 'react';
import {FormField, PatchEvent, set, unset} from "sanity"; //@넣으면 오류발생으로 sanity 사용
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/mode-javascript";


const CodeInput = React.forwardRef((props, ref)  => {
    
    const {
        type, // Schema information
        value, // Current field value
        readOnly, // Boolean if field is not editable
        placeholder, // Placeholder text from the schema
        markers, // Markers including validation rules
        presence, // Presence information for collaborative avatars
        compareValue,
        onFocus, // Method to handle focus state
        onBlur, // Method to handle blur state
        onChange, // Method to handle patch events
      } = props;

      const codeChange = React.useCallback(
        (code)=> {
        onChange(PatchEvent.from(code ? set(code) : unset()));
      }, [onChange]);

    return (
        <FormField
          //아래부분 오류발생으로 주석처리
          //description={type.description} // Creates description from schema
          //title={type.title} // Creates label from schema title
          //__unstable_markers={markers} // Handles all markers including validation
          //__unstable_presence={presence} // Handles presence avatars
          //compareValue={compareValue} // Allows the label to connect to the input field
        >
            <AceEditor 
                mode='javascript'
                name='ace-editor-code'
                width='100%'
                theme='github'
                style={{
                    boxShadow: '0 0 0 1px #cad1dc',
                    lineHeight: 1.6,
                }}
                value={value}
                tabSize={2}
                setOptions={{useWorker: false}}
                ref={ref}
                onChange={codeChange}
            /> 
        </FormField>
      );
});

export default CodeInput;