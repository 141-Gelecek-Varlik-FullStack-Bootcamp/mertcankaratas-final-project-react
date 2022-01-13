import { useField } from 'formik'
import React from 'react'
import { FormField,Label } from 'semantic-ui-react';

export default function ApartmentTextInput({ ...props }) {
    //console.log(props)
    const [field, meta] = useField(props);
    return (
        <div>
            <FormField error={meta.touched && !!meta.error}>
                <input {...field} {...props}></input>
                {meta.touched && !!meta.error ? (
                    <Label pointing basit color="red" content={meta.error}></Label>
                ):null}
            </FormField>
        </div>
    )
}
