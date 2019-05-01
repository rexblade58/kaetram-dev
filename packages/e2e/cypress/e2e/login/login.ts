import LoginContext from './login.context';

import { activateWorldContext } from '../worldutils';

import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I am testing the login features', function () {
    activateWorldContext(this, new LoginContext());
});

Then('I see the login error {string}', function (errorText: string) {
    cy.get('#load-character span.validation-error').should('have.text', errorText);
});

Then('I am logged in successfully', function () {
    cy.wait(1000);
    cy.get('#health', { timeout: 60_000 }).should('be.visible');
});

// player entity position and movement

// world state management with spatial grid

// NPC spawning and basic AI pathfinding

// quest system with objectives and rewards

// combat mechanics and damage formulas

// player trading between characters

// crafting system with recipes

// boss fights with special mechanics

// guild creation and management

// daily quests and achievements

// anti-cheat detection module

// auto-save and crash recovery
