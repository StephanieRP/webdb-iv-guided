# Web DB IV

## A good data model

- captures all the data the system needs
- captures only the data the system needs
- reflects reality
- is flexible, can evolve with the system
- guarantee data integrity
- is driven by the way the data will be used

## Components

- entities === resources -> tables
- attributes -> columns
- relationships === sub-routes (/recipes/:id/ingredients) -> Foreign Keys

## Workflow

- identify entities -> squares on paper
- identify relationships -> lines joining the squares
- identify attributes -> bulleted lists

### Tracks

- id, pk, integer, auto-increment
- name, string(128), unique, required

## Relationships

- one to one -> one to zero or one
- one to many <- most common one
- many to many (smoke and mirrors, an illusion) <- a third table

## Mantras

- for a many to many we need: a third table
- the most important tools for data modeling: ears and pen and paper
- one to many relationships translate to: FK
- where does the FK go? : on the many side

## Model Slack

- a user can be in several channels a channel can have several participants
