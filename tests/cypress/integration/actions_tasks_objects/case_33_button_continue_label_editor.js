// Copyright (C) 2020 Intel Corporation
//
// SPDX-License-Identifier: MIT

/// <reference types="cypress" />

import { taskName } from '../../support/const';

context('Button "Continue" in label editor.', () => {
    const caseId = '33';
    const additionalLabels = [
        `First label for case ${caseId}`,
        `Second label for case ${caseId}`,
        `Third label for case ${caseId}`,
    ];

    before(() => {
        cy.openTask(taskName);
    });

    describe(`Testing case "${caseId}"`, () => {
        it('Adding multiple labels via the Continue button', () => {
            cy.addNewLabelViaContinueButton(additionalLabels);
        });

        it('All labels cuccessfully added.', () => {
            cy.collectLabelsName().then((labelNames) => {
                expect(labelNames).to.include(additionalLabels[0]);
                expect(labelNames).to.include(additionalLabels[1]);
                expect(labelNames).to.include(additionalLabels[2]);
            });
        });
    });
});
