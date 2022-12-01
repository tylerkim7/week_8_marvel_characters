// Imports from React and packages
import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';

// Local Imports
import { chooseName, chooseDescription, chooseComic, chooseSuperpower, chooseDate } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';



interface CharacterFormProps {
    id?:string;
    data?: {}
}

interface CharacterState {
    name: string;
    description: string;
    comic_appeared_in: number;
    super_power: string;
    date_created: Date;
}

export const CharacterForm = (props:CharacterFormProps) => {
    const dispatch = useDispatch();
    let { characterData, getData } = useGetData();
    const store = useStore();
    const { register, handleSubmit } = useForm({ })

    const onSubmit = async (data:any, event: any) => {
        console.log(props.id)
        if (props.id!) {
            await serverCalls.update(props.id!, data)
            console.log(`Updated: ${data} ${props.id}`)
            window.location.reload()
            event.target.reset()
        } else {
            dispatch(chooseName(data.name))
            dispatch(chooseDescription(data.description))
            dispatch(chooseComic(data.comic_appeared_in))
            dispatch(chooseSuperpower(data.super_power))
            dispatch(chooseDate(data.date_created))
            await serverCalls.create(store.getState())
            window.location.reload()
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
            <div>
                    <label htmlFor="nameke">Name</label>
                    <Input {...register('name')} name="name" placeholder='Name' />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <Input {...register('description')} name="description" placeholder="Description"/>
                </div>
                <div>
                    <label htmlFor="comic_appeared_in">Comic Appeared In</label>
                    <Input {...register('comic_appeared_in')} name="comic_appeared_in" placeholder="Comic Appeared In"/>
                </div>
                <div>
                    <label htmlFor="super_power">Super Power</label>
                    <Input {...register('super_power')} name="super_power" placeholder="Super Power"/>
                </div>
                <div>
                    <label htmlFor="acceledate_createdration">Date Created</label>
                    <Input {...register('date_created')} name="date_created" placeholder="Date Created"/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}