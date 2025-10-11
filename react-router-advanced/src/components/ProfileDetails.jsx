import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProfileDetails() {
        const {id}=useParams()
    return (
        <div>
        ProfileDetails -- {id}
        </div>
    )
}
