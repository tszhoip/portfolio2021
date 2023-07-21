import React from 'react'
import { Wrap } from '../component/Core'
import { BlockType } from '../component/Block'



function License() {
  return (
    <div>
      <Wrap width={["100%", "100%", "100%", "100%"]} flexDirection={['column']} p={['4']}>
        <BlockType title="END USER LICENSE AGREEMENT(DESKTOP FONT SOFTWARE)" body="THIS IS A BINDING LEGAL AGREEMENT regarding the font software and the design of the typeface embodied within (collectively, the “Font Software”) that you are downloading or purchasing from YouWorkForThem, for yourself, your company, your employer, or other principal (hereafter collectively referred to as “you”). If you refuse to accept a contractual obligation through this license agreement, you are not permitted to access, download, or use the Font Software. Please thoroughly and carefully read through this Agreement before purchasing, downloading, installing and/or using the Font Software, ANY OF WHICH SHALL INDICATE YOUR EXPRESS AGREEMENT TO THE FOLLOWING TERMS AND CONDITIONS.
        The Font Software licensed under this Agreement and its inherent digital, device-readable, scalable data is supplied to you by YouWorkForThem for USAGE ONLY, and remains the intellectual property of the designer(s) of the Font Software.
        YouWorkForThem and/or the designer(s) reserve all rights not expressly granted to you under this Agreement."/>

        <BlockType title="1. Terms and Conditions" body="This is a legal agreement that establishes the terms and conditions of usage when installing any INARI TYPE font softwares. When purchasing one of our font softwares you are automatically agreeing with the following terms of this contract." />

        <BlockType title="2. You may" body="INARI TYPE all inclusive licenses covers desktop, web and app usage, restricted to the user quantity agreed upon the font software purchase." />

        <BlockType title="Logotype" body="You can adapt, distort, resize, reposition and make any formal alterations you need to match the visual language of your project, respecting the section 3 of this contract." />

        <BlockType title="Partnerships / 3rd party" body="You can provide a copy of the font software for a third party such as a printer or web developer with its use limited to the project. Make sure they erase the font file afterwards." />

        <BlockType title="Backup" body="You can make backup files of our font softwares, making sure you are the only one who has access to them." />

        <BlockType title="You may not" body="You may not resell, redistribute or copy the font software.

You may not modify, rename or adapt de font software generating a new file to be commercially redistributed, such as a new font software (.OTF, .TTF, etc), vector (.eps, .ai, etc) or any other type of file converted from the original.

You may not generate a new font software from the alterations you may create for a logotype project using any INARI typeface.

You may not use the trial font software for commercial work.

You may not share the license between organizations, excepting third parties that may be involved in the project.

You may not do any expansion or translation of any INARI TYPE font softwares without prior permission. Please check the section 5.

You may not use any INARI TYPE font softwares in discriminatory actions."/>

<BlockType title="4. Responsibility" body="The INARI TYPE font softwares are developed to work on the most current design softwares and programs. We recommend downloading the trial version of the font softwares prior to the purchase in order to predict any problems, since we do not make refunds. We are not responsible for any installation or usage problems caused by this nature." />


<BlockType title="5. Extras" body="Translations
If you are interested in adding characters or making the expansion of the font software for a language that is not covered, it is necessary a prior permission. Please contact hi@inaritype.com with ‘’Name of the typeface - translation’’ subject for further information.
For any other inquiries, please get in touch!

We are very happy about your interest in using our typefaces. Don't hesitate in giving us your feedback, we would love to hear from you. Have fun!" />




      </Wrap>
    </div>
  );
}

export default License;
