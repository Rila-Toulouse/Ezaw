import { TypedRecord, makeTypedFactory } from 'typed-immutable-record';


// the typeScript interface that defines the application state's properties
// this is to be imported wherever a reference to the app state is used
// (reducers, components, services...)
export interface AppState {}

// an Immutable.js Record implementation of the AppState interface.
// this only needs to be imported by reducers, since they produce new versions
// of the state
// components should only ever read the state, never change it,
// so they should only need the interface, not the record
export interface AppStateRecord extends TypedRecord<AppStateRecord>, AppState {}

// an Immutable.js record factory for the record
export const appStateFactory = makeTypedFactory<AppState, AppStateRecord>({

});