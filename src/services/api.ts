// ============================================================
// YoPool API Service Layer
// 统一数据访问层 — 将来接入后端时只需修改这里的函数实现
// ============================================================

import {
    homeCards,
    homeFilters,
    venues,
    courses,
    trialClass,
    packages,
    orders,
    achievements,
    students,
    defaultScheduleSlots,
    skillTags,
} from '../data/mockData';

import type {
    Course,
    Venue,
    CoursePackage,
    Order,
    Achievement,
    Student,
    ScheduleSlot,
} from '../data/mockData';

// Re-export types for convenience
export type { Course, Venue, CoursePackage, Order, Achievement, Student, ScheduleSlot };

// ---------- 首页 ----------

export const getHomeCards = () => homeCards;
export const getHomeFilters = () => homeFilters;
export const getVenues = () => venues;

// ---------- 选课页 ----------

export const getCourses = () => courses;
export const getTrialClass = () => trialClass;

// ---------- 购课 ----------

export const getPackages = () => packages;

// ---------- 订单 ----------

export const getOrders = () => orders;

// ---------- 成就 ----------

export const getAchievements = () => achievements;

// ---------- 教练端 ----------

export const getStudents = () => students;
export const getDefaultScheduleSlots = () => defaultScheduleSlots;

// ---------- 课后总结 ----------

export const getSkillTags = () => skillTags;
