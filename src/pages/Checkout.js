import React, { Component } from "react";
import Fade from "react-reveal/Fade";

import Header from "parts/Header";
import Button from "elements/Button";
import Stepper, {
  Numbering,
  Meta,
  MainContent,
  Controller,
} from "elements/Stepper";

export default class Checkout extends Component {
    state = {
        data: {
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          proofPayment: "",
          bankName: "",
          bankHolder: "",
        },
      };
    render() {
        return (
            <>
                <Header isCentered/>
            </>
        )
    }
}
