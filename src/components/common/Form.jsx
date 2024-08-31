
import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger } from '../ui/select'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'

function CommonForm({ formControls, formData, setFormData, onSubmit, btnText }) {
    const types = {
        INPUT: 'input',
        SELECT: 'select',
        TEXTAREA: 'textarea',
    }
    const renderInputsByCompType = (getControlItem) => {
        let element = null
        const value = formData[getControlItem.name]
        switch (getControlItem.componentType) {
            case types.INPUT: 
                element = 
                    <Input 
                        id={getControlItem.name}
                        name={getControlItem.name}
                        placeholder={getControlItem.placeHolder}
                        type={getControlItem.type}
                        value={value}
                        onChange={e => {
                            setFormData({
                                ...formData,
                                [getControlItem.name]: e.target.value
                            })
                        }} 
                    />
                break
            case types.SELECT: 
                element = 
                    <Select 
                        value={value}
                        onValueChange={value => {
                            setFormData({
                                ...formData,
                                [getControlItem.name]: value
                            })
                        }} 
                    >
                        <SelectTrigger className='w-full'>
                            <SelectValue placeholder={getControlItem.placeHolder} />
                        </SelectTrigger>
                        <SelectContent>
                            {
                                getControlItem.options &&
                                getControlItem.options.length > 0
                                ? getControlItem.options.map(option => (
                                    <SelectItem key={option.id} value={option.id}/>
                                  ))
                                : null
                            }
                        </SelectContent>
                    </Select>
                break
            case types.TEXTAREA: 
                element = 
                    <Textarea         
                        id={getControlItem.name}
                        name={getControlItem.name}
                        placeholder={getControlItem.placeHolder}
                        type={getControlItem.type}
                        value={value}
                        onChange={e => {
                            setFormData({
                                ...formData,
                                [getControlItem.name]: e.target.value
                            })
                        }} 
                    />
                break
            default:
                element = 
                    <Input 
                        id={getControlItem.name}
                        name={getControlItem.name}
                        placeholder={getControlItem.placeHolder}
                        type={getControlItem.type}
                    />
                break
        }
        return element
    }
  return (
    <form onSubmit={onSubmit}>
        <div className='flex flex-col gap-3'>
            {
                formControls.map(item => (
                    <div key={item.label} className='grid w-full gap-1.5'>
                        <Label className='mb-1 text-left'>{item.label}</Label>
                        {
                            renderInputsByCompType(item)
                        }
                    </div>
                ))
            }
        </div>
        <Button type='submit' className='mt-2 w-full'>{btnText || 'Submit'}</Button>
    </form>
  )
}

export default CommonForm