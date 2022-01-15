import { useField } from 'formik'
import React from 'react'
import { Form,FormField,Label } from 'semantic-ui-react';

export default function ApartmentTextInput({ ...props }) {
    //console.log(props)
    const [field, meta] = useField(props);
    return (
        <div>
            <FormField error={meta.touched && !!meta.error}>
                {/* <input {...field} {...props}></input> */}
                <Form.Input fluid type='text' iconPosition='left' {...field} {...props}  ></Form.Input>
                {meta.touched && !!meta.error ? (
                    <Label pointing basit color="red" content={meta.error}></Label>
                ):null}
            </FormField>
        </div>
    )
}
