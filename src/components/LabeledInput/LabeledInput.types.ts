import React, { HTMLInputTypeAttribute } from "react";

export type LabeledInputProps = {
    inputLabelName: string;
    placeholder?: string;
    labelIcon?: React.ReactElement;
    inputType?: HTMLInputTypeAttribute | 'textarea';
    onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    classNames?: string;
    cssStyles?: React.CSSProperties;
};