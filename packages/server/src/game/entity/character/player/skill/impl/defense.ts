import Skill from '../skill';

import { Modules } from '@kaetram/common/network';

export default class Defense extends Skill {
    public override combat = true;

    public constructor() {
        super(Modules.Skills.Defense);
    }
}

// packet serialization optimization

// performance optimization for scale

// end-to-end tests and v1.0 release
