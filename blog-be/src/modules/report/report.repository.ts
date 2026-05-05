import { Post, Report, ReportStatus } from '@prisma/client';
import { ReportDto, UpdateReportStatusDto } from './report.dto';

export interface IReportRepository {
  createReport(data: ReportDto, userId: string): Promise<Report>;

  findPostById(postId: string): Promise<Post | null>;

  findReportByPostAndUserID(postId: string, userId: string): Promise<Report | null>;

  udateReportStatus(data: UpdateReportStatusDto): Promise<Report>;

  findReportById(reportId: string): Promise<Report | null>;

  deleteReport(reportId: string, userId: string): Promise<Report>;

  findReportByUserId(userId: string, page: number, limit: number): Promise<Report[]>;

  findAllReport(page: number, limit: number): Promise<Report[]>;

  findReportByStatus(status: ReportStatus, page: number, limit: number): Promise<Report[]>;
}
