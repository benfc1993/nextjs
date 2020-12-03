import React from 'react'

export const defaultPartialContent = (
    <ul>
        <li>10 year warranty*</li>
        <li>Easy to reach pressure gauge on front panel</li>
        <li>Compatible with Ideal controls</li>
        <li>Service timer with telephone number display / service display</li>
        <li>Large digital display</li>
    </ul>
)

export const defaultFullContent = (
    <ul>
        <li>10 year warranty*</li>
        <li>Easy to reach pressure gauge on front panel</li>
        <li>Compatible with Ideal controls</li>
        <li>Service timer with telephone number display / service display</li>
        <li>Large digital display</li>
        {[
            ...[...new Array(5).fill('')].map((_, index) => (
                <li key={index}>Amet placerat tincidunt suscipit varius pretium massa</li>
            )),
        ]}
    </ul>
)
