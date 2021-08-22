import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const BackButton = () => {
  return (
    <Box sx={{ "& button": { m: 1 } }}>
      <div>
        <Button
			variant="contained"
			size="large"
			component={Link}
			to="/"
		>
          戻る
        </Button>
      </div>
    </Box>
  );
};
