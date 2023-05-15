import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { BookModule } from './book/book.module';
import { join } from 'path';

@Module({
  imports: [GraphQLModule.forRoot({
    driver: ApolloDriver,
    playground: true,   //where all graphQL queries will be tested
    autoSchemaFile: join(process.cwd(), 'src/schema.graphql'),    //to generate automatic schemas by NestJs or by typescript
    definitions: {  //to genrate automatic interfaces
      path: join(process.cwd(), 'src/graphql.ts'),
    }
    // typePaths: ['./**/*.graphql'], //the path where my schema will be strored
  }),
  BookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
