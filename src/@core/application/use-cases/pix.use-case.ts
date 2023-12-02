import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { AuthGuard } from '@nestjs/passport';
import { InjectRepository } from "@nestjs/typeorm";
import { AxiosResponse } from 'axios';
import { Observable, map } from 'rxjs';
import { Pix } from "src/@core/domain/entities/pix.entiy";
import { Repository } from "typeorm";
const express = require('express')
const app = express()

@Injectable()
export class PixService {
    constructor(
        @InjectRepository(Pix)
        private readonly httpService: HttpService
    ) { }


}