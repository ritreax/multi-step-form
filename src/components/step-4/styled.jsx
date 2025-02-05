import styled, { css } from "styled-components";

const rowCommonCss = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Step4 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const MainBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: var(--magnolia);
  padding: 24px;
  border-radius: 8px;
`;

export const Title = styled.h4`
  color: var(--cool-gray);
`;

export const MainRow = styled.div`
  ${rowCommonCss}
  border-bottom: 1px solid var(--light-gray);
  padding-bottom: 24px;
  ${Title} {
    color: var(--marine-blue);
    font-weight: 500;
  }
`;

export const SubRow = styled.div`
  ${rowCommonCss}
  padding-top: 12px;
`;

export const TotalRow = styled.div`
  ${rowCommonCss}
  padding: 12px 24px;
`;

export const Price = styled.h6`
  font-weight: 500;
`;

export const TotalAmount = styled.h3`
  font-size: 18px;
  color: var(--purplish-blue);
  font-weight: 500;
`;
