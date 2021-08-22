import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const SendButton = () => {
  return (
    <Box sx={{ "& button": { m: 1 } }}>
      <Sdiv>
        <Button
			variant="contained"
			size="large"
			component={Link}
			to="/result"
		>
          残された時間
        </Button>
      </Sdiv>
    </Box>
  );
};

const Sdiv = styled.div`
  margin: 50px 0 0 300px;
`;
