import React from 'react';
import lo from '../assets/logo/lo01.jpg';
import { Blockitem, BlockTwoLn100 } from '../component/Block';
import { Container, Wrap, H1, Text } from '../component/Core';
import { base } from '../theme';
import { ThemeProvider } from "styled-components";

// Placeholder images - replace with CD-1-01.jpg through CD-1-15.jpg when ready
const ImgSet = [
  { img: lo, title: "Design System Overview", body: "" },
  { img: lo, title: "Component Library", body: "" },
  { img: lo, title: "Style Guide", body: "" },
  { img: lo, title: "Color System", body: "" },
  { img: lo, title: "Typography", body: "" },
  { img: lo, title: "Icons", body: "" },
  { img: lo, title: "Buttons", body: "" },
  { img: lo, title: "Forms", body: "" },
  { img: lo, title: "Cards", body: "" },
  { img: lo, title: "Navigation", body: "" },
  { img: lo, title: "Layout", body: "" },
  { img: lo, title: "Spacing", body: "" },
  { img: lo, title: "Motion", body: "" },
  { img: lo, title: "Accessibility", body: "" },
  { img: lo, title: "Implementation", body: "" },
];

function CanooDesignSystem() {
  return (
    <ThemeProvider theme={base}>
      <Container width={[1]} flexDirection='column' flexWrap="wrap" alignItems='center'>
        
        <Wrap width={[1, 1, 2/3, 1/2]} flexDirection='column' height="auto" justifyContent="space-between" pt={[4]} pb={[4]}>
          <H1 fontFamily={[0]} fontSize={[1]} pb={[2]}>Canoo, Design System</H1>
          
          <Wrap flexDirection='column' pb={[3]}>
            <Text fontFamily={[0]} fontSize={[0]} pb={[1]} fontWeight='600'>Role</Text>
            <Text fontFamily={[0]} fontSize={[0]} color='grey'>Design Lead</Text>
          </Wrap>

          <Wrap flexDirection='column' pb={[3]}>
            <Text fontFamily={[0]} fontSize={[0]} pb={[1]} fontWeight='600'>Deliverable</Text>
            <Text fontFamily={[0]} fontSize={[0]} color='grey'>Art Direction, Design System</Text>
          </Wrap>

          <Wrap flexDirection='column' pb={[4]}>
            <Text fontFamily={[0]} fontSize={[0]} pb={[2]} fontWeight='600'>EN</Text>
            <Text fontFamily={[0]} fontSize={[0]} color='grey' lineHeight='1.6'>
              To enhance Canoo's design and development processes, we aim to establish a comprehensive design system rooted in functionalism. By addressing the current challenges of misalignment, slow turnaround times, and inconsistent aesthetics, we can streamline workflows, improve code quality, and ensure adherence to our company's minimalist design philosophy. Our solution involves creating a centralized repository of reusable UI components, developing a detailed style guide, implementing a version control system, and providing ongoing training and support. This approach will foster collaboration between design and development teams, accelerate project timelines, and deliver high-quality products that align with our brand identity.
            </Text>
          </Wrap>

          <Wrap flexDirection='column' pb={[4]}>
            <Text fontFamily={[0]} fontSize={[0]} pb={[2]} fontWeight='600'>CN</Text>
            <Text fontFamily={[0]} fontSize={[0]} color='grey' lineHeight='1.6'>
              为了提升 Canoo 的设计和开发流程，我们旨在建立一个基于功能主义的综合设计系统。通过解决当前存在的错位、缓慢的周转时间和不一致的美学问题，我们可以简化工作流程，提高代码质量，并确保遵守公司简约的设计理念。我们的解决方案包括创建一个集中的可重用 UI 组件库、开发详细的样式指南、实施版本控制系统以及提供持续的培训和支持。这种方法将促进设计和开发团队之间的协作，加快项目时间表，并交付与我们品牌形象相符的高质量产品。
            </Text>
          </Wrap>
        </Wrap>

        <Wrap width={[1]} display="grid" gridTemplateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)"]} gap={[2]} pt={[4]} pb={[4]}>
          {ImgSet.map((item, index) => (
            <Blockitem key={index} image={item.img} title={item.title} body={item.body} />
          ))}
        </Wrap>

      </Container>
    </ThemeProvider>
  );
}

export default CanooDesignSystem;
