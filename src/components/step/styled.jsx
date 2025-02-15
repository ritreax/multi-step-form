import styled from "styled-components";

export const Step = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 24px;
  padding: 24px;
`;

export const StepHeader = styled.div``;

export const Title = styled.h2`
  font-size: 36px;
  font-weight: 700;
`;

export const Subtitle = styled.h3`
  color: var(--cool-gray);
`;

export const Body = styled.div`
  flex: 1;
`;

export const StepFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const GoBackButton = styled.button`
  color: var(--cool-gray);
  &:hover {
    color: inherit;
  }
`;

export const GoNextButton = styled.button`
  /* eger solunda button olmaz ise en sagda olsun diye yazildi */
  margin-left: auto;
  background-color: var(--marine-blue);
  color: var(--white);
  padding: 12px 24px;
  border-radius: 8px;
  transition: background-color 150ms ease;

  &:hover {
    background-color: var(--pastel-blue);
  }
`;
