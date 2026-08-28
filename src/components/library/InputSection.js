import React, { useState } from 'react';
import styled from 'styled-components';

const SectionContainer = styled.div`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 12px;
  font-weight: 500;
  margin: 0 0 24px 0;
  letter-spacing: -0.01em;
  text-transform: uppercase;
`;

const SectionDescription = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.6;
  margin: 0 0 32px 0;
`;

const InputTypeContainer = styled.div`
  margin-bottom: 48px;
`;

const InputTypeTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 24px 0;
  letter-spacing: -0.01em;
`;

const StateGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  margin-bottom: 24px;
`;

const StateCard = styled.div`
  border: 1px solid #EAEAEA;
  border-radius: 4px;
  padding: 24px;
  background-color: #FFF;
`;

const StateLabel = styled.div`
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #999;
  margin-bottom: 16px;
`;

const DemoInput = styled.input`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #EAEAEA;
  border-radius: 4px;
  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif;
  transition: all 0.2s ease;
  margin-bottom: 12px;

  &:focus {
    outline: none;
    border-color: #000;
    background-color: #f5f5f5;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background-color: #EAEAEA;
  }
`;

const DemoSelect = styled.select`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #EAEAEA;
  border-radius: 4px;
  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif;
  background-color: #FFF;
  transition: all 0.2s ease;
  margin-bottom: 12px;

  &:focus {
    outline: none;
    border-color: #000;
    background-color: #f5f5f5;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background-color: #EAEAEA;
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const DemoCheckbox = styled.input`
  width: 16px;
  height: 16px;
  margin-right: 8px;
  cursor: pointer;
  border-radius: 2px;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const CheckboxLabel = styled.label`
  font-size: 14px;
  cursor: pointer;
  user-select: none;

  &:has(input:disabled) {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const InputLabel = styled.label`
  display: block;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const StateDescription = styled.div`
  font-size: 12px;
  color: #666;
  line-height: 1.5;
`;

const CodeBlock = styled.pre`
  background-color: #111;
  color: #39FF14;
  padding: 16px;
  border-radius: 4px;
  overflow-x: auto;
  font-size: 12px;
  font-family: 'Courier New', monospace;
  line-height: 1.5;
  margin: 16px 0 0 0;
`;

const VariantGuide = styled.div`
  background-color: #f5f5f5;
  border-left: 4px solid #000;
  padding: 16px;
  border-radius: 4px;
  font-size: 13px;
  line-height: 1.6;
  color: #333;
  margin-top: 16px;
`;

const InputSection = () => {
  const [formValue, setFormValue] = useState('');
  const [selectValue, setSelectValue] = useState('option1');
  const [checkboxes, setCheckboxes] = useState({
    option1: true,
    option2: false,
    option3: true
  });

  const handleCheckboxChange = (option) => {
    setCheckboxes(prev => ({
      ...prev,
      [option]: !prev[option]
    }));
  };

  return (
    <SectionContainer>
      <SectionTitle>Input</SectionTitle>
      <SectionDescription>
        Input components handle user data entry. We provide three types: text input, dropdown select, and checkbox.
      </SectionDescription>

      {/* Text Input */}
      <InputTypeContainer>
        <InputTypeTitle>Text Input</InputTypeTitle>
        <VariantGuide>
          Single-line text input for form fields, search, and data entry.
        </VariantGuide>

        <StateGrid>
          <StateCard>
            <StateLabel>Default</StateLabel>
            <InputLabel>Enter text</InputLabel>
            <DemoInput placeholder="Enter your text..." value={formValue} onChange={(e) => setFormValue(e.target.value)} />
            <StateDescription>
              Light grey border, ready for input.
            </StateDescription>
          </StateCard>

          <StateCard>
            <StateLabel>Focused</StateLabel>
            <InputLabel>Enter text</InputLabel>
            <DemoInput autoFocus placeholder="Focused state..." defaultValue="typing" />
            <StateDescription>
              Black border and light background show focused state.
            </StateDescription>
          </StateCard>

          <StateCard>
            <StateLabel>Filled</StateLabel>
            <InputLabel>Enter text</InputLabel>
            <DemoInput defaultValue="Sample input value" />
            <StateDescription>
              Contains user-entered data.
            </StateDescription>
          </StateCard>

          <StateCard>
            <StateLabel>Disabled</StateLabel>
            <InputLabel>Enter text</InputLabel>
            <DemoInput disabled defaultValue="Cannot edit" />
            <StateDescription>
              Reduced opacity, not interactive.
            </StateDescription>
          </StateCard>
        </StateGrid>

        <CodeBlock>{`<input
  type="text"
  placeholder="Enter text..."
/>`}</CodeBlock>
      </InputTypeContainer>

      {/* Dropdown/Select */}
      <InputTypeContainer>
        <InputTypeTitle>Dropdown Select</InputTypeTitle>
        <VariantGuide>
          Dropdown selector for choosing from predefined options.
        </VariantGuide>

        <StateGrid>
          <StateCard>
            <StateLabel>Default</StateLabel>
            <InputLabel>Choose option</InputLabel>
            <DemoSelect value={selectValue} onChange={(e) => setSelectValue(e.target.value)}>
              <option value="option1">Select an option</option>
              <option value="option2">Option 1</option>
              <option value="option3">Option 2</option>
            </DemoSelect>
            <StateDescription>
              Light grey border, showing default state.
            </StateDescription>
          </StateCard>

          <StateCard>
            <StateLabel>Focused</StateLabel>
            <InputLabel>Choose option</InputLabel>
            <DemoSelect autoFocus>
              <option>Focused option</option>
              <option>Option 1</option>
              <option>Option 2</option>
            </DemoSelect>
            <StateDescription>
              Black border indicates focused state.
            </StateDescription>
          </StateCard>

          <StateCard>
            <StateLabel>Selected</StateLabel>
            <InputLabel>Choose option</InputLabel>
            <DemoSelect defaultValue="option2">
              <option value="option1">Option 1</option>
              <option value="option2">Selected Option</option>
              <option value="option3">Option 3</option>
            </DemoSelect>
            <StateDescription>
              Shows selected option from dropdown.
            </StateDescription>
          </StateCard>

          <StateCard>
            <StateLabel>Disabled</StateLabel>
            <InputLabel>Choose option</InputLabel>
            <DemoSelect disabled>
              <option>Disabled dropdown</option>
              <option>Not available</option>
            </DemoSelect>
            <StateDescription>
              Reduced opacity, not interactive.
            </StateDescription>
          </StateCard>
        </StateGrid>

        <CodeBlock>{`<select>
  <option>Select an option</option>
  <option>Option 1</option>
  <option>Option 2</option>
</select>`}</CodeBlock>
      </InputTypeContainer>

      {/* Checkbox */}
      <InputTypeContainer>
        <InputTypeTitle>Checkbox</InputTypeTitle>
        <VariantGuide>
          Checkbox for binary yes/no or multiple selection options.
        </VariantGuide>

        <StateGrid>
          <StateCard>
            <StateLabel>Unchecked</StateLabel>
            <CheckboxContainer>
              <DemoCheckbox type="checkbox" id="unchecked" />
              <CheckboxLabel htmlFor="unchecked">Unchecked option</CheckboxLabel>
            </CheckboxContainer>
            <StateDescription>
              Default unchecked state, ready to select.
            </StateDescription>
          </StateCard>

          <StateCard>
            <StateLabel>Checked</StateLabel>
            <CheckboxContainer>
              <DemoCheckbox type="checkbox" id="checked" defaultChecked />
              <CheckboxLabel htmlFor="checked">Checked option</CheckboxLabel>
            </CheckboxContainer>
            <StateDescription>
              Checkmark shows selected state.
            </StateDescription>
          </StateCard>

          <StateCard>
            <StateLabel>Disabled Unchecked</StateLabel>
            <CheckboxContainer>
              <DemoCheckbox type="checkbox" id="disabled1" disabled />
              <CheckboxLabel htmlFor="disabled1">Disabled (unchecked)</CheckboxLabel>
            </CheckboxContainer>
            <StateDescription>
              Reduced opacity, not interactive.
            </StateDescription>
          </StateCard>

          <StateCard>
            <StateLabel>Disabled Checked</StateLabel>
            <CheckboxContainer>
              <DemoCheckbox type="checkbox" id="disabled2" defaultChecked disabled />
              <CheckboxLabel htmlFor="disabled2">Disabled (checked)</CheckboxLabel>
            </CheckboxContainer>
            <StateDescription>
              Checked but locked, cannot change state.
            </StateDescription>
          </StateCard>
        </StateGrid>

        <CodeBlock>{`<input type="checkbox" />
<label>Checkbox option</label>`}</CodeBlock>

        <div style={{ marginTop: 40 }}>
          <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 16 }}>Multiple Checkboxes Example</h4>
          <StateCard>
            <StateLabel>Group Selection</StateLabel>
            {['option1', 'option2', 'option3'].map((option) => (
              <CheckboxContainer key={option}>
                <DemoCheckbox
                  type="checkbox"
                  id={option}
                  checked={checkboxes[option]}
                  onChange={() => handleCheckboxChange(option)}
                />
                <CheckboxLabel htmlFor={option}>Option {option.slice(-1)}</CheckboxLabel>
              </CheckboxContainer>
            ))}
            <StateDescription style={{ marginTop: 12 }}>
              Multiple checkboxes can be selected independently.
            </StateDescription>
          </StateCard>
        </div>
      </InputTypeContainer>
    </SectionContainer>
  );
};

export default InputSection;
