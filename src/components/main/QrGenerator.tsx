"use client";
import { useState } from "react";
import { QrCode } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

import dynamic from "next/dynamic";
const QrCanvas = dynamic(() => import("./QrCanvas"), { ssr: true });

const QrGenerator = () => {
    const [value, setValue] = useState<string>("");

    const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const qrText = formData.get("qrText") as string;
        setValue(qrText);
    };

    return (
        <form
            className='flex flex-col items-center justify-center w-full max-w-96 gap-16'
            onSubmit={onFormSubmit}
        >
            <div className='w-full h-full'>
                <Label htmlFor='qrText'>Your link/text </Label>
                <Input
                    id='qrText'
                    name='qrText'
                    type='text'
                    required
                    // pattern='.{1,32}' for limiting data generation
                />
            </div>
            {value && <QrCanvas value={value} />}
            <Button
                className='text-3xl inline-flex items-end gap-4 h-fit w-fit'
                type='submit'
            >
                Generate <QrCode className='!size-8' />
            </Button>
        </form>
    );
};

export default QrGenerator;
