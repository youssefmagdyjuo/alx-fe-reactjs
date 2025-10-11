import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProfileSettings() {
    const {id}=useParams()
    return (
        <div>
        ProfileSettings -- {id}
        </div>
    )
}
