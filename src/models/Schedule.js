// @flow

export type WeekInterval = {|
    startTime: '',
    endTime: '',
|};

export type ScheduleType = {|
    doctorNumber: number,
    step: number,
    weekIntervals: WeekInterval[],
|};
