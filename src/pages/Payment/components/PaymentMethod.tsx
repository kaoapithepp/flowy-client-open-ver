import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

// Stripe
import { 
	useStripe,
	useElements,
	PaymentElement
} from "@stripe/react-stripe-js";
import { Button } from "../../../components/button/Button";

const PaymentMethod: React.FC = () => {
    const [isProcessing, setIsProcessing] = useState(false);

    const { bookId } = useParams();
    
    const stripe = useStripe();
    const elements = useElements();

    async function handleSubmit(e: any) {
        e.preventDefault();

        if(!stripe || !elements){
            return;
        }

        setIsProcessing(true);

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: `${window.location.origin}/ticket/confirmation/${bookId}`
            }
        });

        if(error.type === "card_error" || error.type === "validation_error"){
            alert(error.message);
        } else {
            alert("An unexpected error occured.");
        }

        setIsProcessing(false);
    }
    
    return (
        <PaymentForm onSubmit={handleSubmit}>
            <PaymentElement />
            <Button
                disabled={isProcessing || !stripe || !elements}
            >
                {isProcessing ? "กำลังประมวลผล..." : "ชำระเงิน"}
            </Button>
        </PaymentForm>
    );
}

const PaymentForm = styled.form`
    padding: 16px;
    background-color: var(--white);
    box-shadow: var(--shadow);
    border-radius: 16px;
    max-width: 600px;
    margin: 0 auto;
    /* margin: 16px auto; */
`;

export default PaymentMethod;